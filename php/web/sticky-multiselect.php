<html>
    <head><title>Personality</title></head>

    <body>

    <?php //fetch form values
    $attrs = $_GET['attrib'];
    if (!is_array($attrs)) {
        $attrs = array();
    }

    function make_checkboxes ($name, $query, $options) {
        foreach ($options as $value => $label) {
          printf('%s <input type="checkbox" name="%s[]" value="%s" ', $label, $name, $value);
          if (in_array($value, $query)) { echo "checked "; }
          echo "/><br />\n";
        }
      }     

    //list of values and labels
    $personalityAttrib = array (
        'perky' => "Perky",
        'morose' => "Morose",
        'thinking' => "Thinking",
        'feeling' => "Feeling"
    );
    ?>

    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="GET">
        Select your personality attributes: <br>
        <?php make_checkboxes('attrib', $attrs, $personalityAttrib); ?> <br>
        <input type="submit" name="s" value="Record my personality!">
    </form>

    <?php if (array_key_exists('s', $_GET)) {
        $description = join(' ', $_GET['attrib']);
        echo "You have a {$description} personality!";
    }
    ?>

    </body>
</html>
