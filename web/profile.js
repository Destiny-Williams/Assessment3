document.getElementById('color').addEventListener("click", function() {
    alert("Yellow");
 }​);​


 4

This will do it

<input id="button" type="submit" name="button" onclick="myFunction();" value="enter"/>

<script>
function myFunction(){
    alert("You button was pressed");
};   
</script>