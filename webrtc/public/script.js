//script can access socketio script and roomid
//client side
//run peerjs --port 3001 on terminal to get peerserver started which will give id

const socket = io('/') //socket connected to root path of application

const videoGrid = document.getElementById('video-grid')

//connection to peer server
const myPeer = new Peer(undefined, { //undefined to let server gen the userid
    host: '/',
    port: '3001'
}) 

const myVideo = document.createElement('video')
myVideo.muted = true //mute me for myself only lol
const peers = {} //maps userid to call connection

navigator.mediaDevices.getUserMedia({
    video: true, 
    audio: true
}).then(stream => { //stream is video + audio
    addVideoStream(myVideo, stream)

    //listens for new users calling
    myPeer.on('call', call => {
        //send out our video to others
        call.answer(stream)
        const video = document.createElement('video')
        //get others video
        call.on('stream', remoteStream => {
            addVideoStream(video, remoteStream)
        })
    })

    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream) //stream to send to the new user that has joined
    })

})

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => { //once loaded, play video
        video.play()
    })
    videoGrid.append(video)
}

socket.on('user-disconnected', userId => {
    //remove video of that user
    if(peers[userId]) peers[userId].close()  //close the connection
})

myPeer.on('open', id => { 
    socket.emit('join-room', ROOM_ID, id) //send event to server
})

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream) //sending user the stream
    const video = document.createElement('video')
    call.on('stream', remoteStream => { //when they send back the video stream, add it to our page
        addVideoStream(video, remoteStream)
    })

    //happens when user leaves the call
    call.on('close', () => {
        video.remove() //remove their video
    })

    peers[userId] = call
}


