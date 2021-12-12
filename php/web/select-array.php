<html>
    <head><title>Personality</title></head>

    <body>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="GET">
        Select your personality attributes: <br>
        <select name="attrib[]" multiple>
            <option value="perky">Perky</option>
            <option value="morose">Morose</option>
            <option value="thinking">Thinking</option>
            <option value="feeling">Feeling</option>
        </select>
        <input type="submit" name="s" value="Record my personality!">
    </form>

    <?php if (array_key_exists('s', $_GET)) {
        $description = join(' ', $_GET['attrib']);
        echo "You have a {$description} personality";
    }
    ?>

    </body>

</html>