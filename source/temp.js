/**
 * Created by kyleobrien on 6/6/17.
 */
<script type="text/javascript">

// To-Do
    function checkFields() {
        // var allFieldsValid = true;
        //
        // if ($("#nameInput").val() == "") {
        //   allFieldsValid = false;
        //   $(this).append("<b class=\"error-message\">Empty</b>");
        // }
        // if ($("emailInput").val() == "") {
        //   return false;
        // }
        // if ($("productInput").val() == "default") {
        //   return false;
        // }
        // if ($("snInput").val() == "") {
        //   return false;
        // }
        // if ($("subjectInput").val() == "") {
        //   return false;
        // }
        // if ($("summaryInput").val() == "") {
        //   return false;
        // }
        //
        // return allFieldsValid
    }

function dropDownChanges() {
    var recipient = $("#recipientInput");
    switch ($(".form-drop-down").val()) {
        case "techtool pro":
            $(".hiden-field").show();
            recipient.val("help@micromat.com");
            break;
        case "usbee":
            $(".hiden-field").show();
            recipient.val("help@micromat.com");
            break;
        case "maccheck":
            $(".hiden-field").show();
            recipient.val("help@micromat.com");
            break;
        case "atomic":
            $(".hiden-field").show();
            recipient.val("help@micromat.com");
            break;
        case "checkmate":
            $(".hiden-field").show();
            recipient.val("help@micromat.com");
            break;
        default:
            $(".hiden-field").hide();
            $("#serial-field").val("");
            recipient.val("sales@micromat.com");
    }
}

function getProdID() {
    switch (parseInt($("#serial-field").val().substring(0,2))) {
        case 38:
            return "ttp9";
            break;
        case 39:
            return "ttp95";
            break;
        case 29:
            return "check";
            break;
        case 94:
            return "atom";
            break;
        default:
            return null;
    }
}

// 65 => 'prot', Protege
// 66 => 'prgo', Protogo
// 47 => 'ttp4', Techtool Pro 4
// 48 => 'ttp4', ''
// 57 => 'ttp5',
// 58 => 'ttp5',
// 62 => 'ttp6',
// 76 => 'ttp7',
// 81 => 'ttp8',
// 38 => 'ttp9', Techtool Pro 9 *
// 39 => 'ttp95', Techtool Pro 9.5 *
// 10 => 'd10', Drive 10
// 29 => 'check', Checkmate *
// 36 => 'dstu', Disk Studio
// 24 => 'prgo4', Protogo 4
// 94 => 'atom'); ATOMIC *

function handlePopUpMessages(isValidSN) {

    // var subStr = parseInt($("#serial-field").val()).substring(0,2);
    // if (subStr >= 41 && subStr <= 81 && !$(".hiden-field b").hasClass("result-unsupported")) {
    //   $("#serial-field").addClass("result-unsupported");
    //   $("#serial-field").append("<b class=\"result-unsupported\" style=\"color:red; margin-left: 10px;\">Unsupported</b>");
    // }

    console.log("Should be False: " + $(".hiden-field b").hasClass("result-valid"));

    if (!$(".hiden-field b").hasClass("result-valid") && isValidSN) {
        console.log("Should shouldn;t run yet!å");
        $(".hiden-field b").addClass("result-valid");
        $("#serial-field").append("<b class=\"result-unsupported\" style=\"color:green; margin-left: 10px;\">Valid!</b>");
    }

    if ($(".hiden-field b").hasClass("result-unsupported")) {
        $(".hiden-field b").removeClass("result-unsupported");
        $(".hiden-field b").remove();
    }
    if (!$(".hiden-field b").hasClass("result-invalid")) {
        $("#serial-field").append("<b class=\"invalid-result\" style=\"color:red; margin-left: 10px;\">Invalid</b>");
    }

}

// In Progress
function testSN() {
    var prodID = getProdID();
    var serialNumber = parseInt($("#serial-field").val());
    var post = window.location.protocol + '//www.micromat.com/sn_stuff/store_validate_sn.php?sn=' + serialNumber + '&pid_match=' + prodID;

    $.get(post, function(isValidSN) {
        handlePopUpMessages(isValidSN);
        console.log("isValidSN: " + isValidSN);
    });

}

$(document).ready(function () {

    // Hides Sereal Number Field
    $(".hiden-field").hide();

    // SN Field
    $(".form-drop-down").click(function () {
        dropDownChanges();
    });

    $()

    $("#serial-field").blur(function() {
        testSN();
    });

});

</script>
