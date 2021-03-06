<?php
$name = $_POST['name'];
$mediaType = $_POST['media_type'];
$filename = $_POST['filename'];
$caption = $_POST['caption'];
$status = $_POST['status'];

$tried = ($_POST['tried'] == 'yes');

if ($tried) {
    $validated = (!empty($name) && !empty($mediaType) && !empty($filename));

    if (!$validated) { 
?>
        <p>The name, media type and filename are required fields. Pls fill them.</p>
<?php }
}

if ($tried && $validated) {
    echo "<p>The item has been created.</p>";
}

function media_selected($type){
    global $mediaType;
    if ($mediaType == $type) {
        echo "Selected!";
    }
} ?>

<form action="<?php htmlentities($_SERVER['PHP_SELF']) ?>" method="POST">
  Name: <input type="text" name="name" value="<?= $name ?>" /><br />
  Status: <input type="checkbox" name="status" value="active"
  <?php if ($status == 'active') { echo 'checked'; } ?> /> Active<br />
  Media: <select name="media_type">
    <option value="">Choose one</option>
    <option value="picture" <?php media_selected('picture') ?> />Picture</option>
    <option value="audio" <?php media_selected('audio') ?> />Audio</option>
    <option value="movie" <?php media_selected('movie') ?> />Movie</option>
  </select><br />

  File: <input type="text" name="filename" value="<?= $filename ?>" /><br />
  Caption: <textarea name="caption"><?= $caption ?></textarea><br />

  <input type="hidden" name="tried" value="yes" />
  <input type="submit"
         value="<?php echo $tried ? 'Continue' : 'Create'; ?>" />
</form>
