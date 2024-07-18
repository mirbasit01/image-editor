//  on hover open col picker 
document.addEventListener('DOMContentLoaded', function() {
    const colorPickerBtn = document.getElementById('color-picker-btn');
    const colorPicker = document.getElementById('color-picker');

    colorPickerBtn.addEventListener('click', function() {
        colorPicker.click(); // Trigger click on color picker input
    });

    colorPicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value;
        console.log('Selected Color:', selectedColor);
        // Use selectedColor as needed (e.g., apply to elements)
    });
});






// IMG hover text
function toggleFilePicker() {
      const filePickerContainer = document.querySelector('.filepicker-container');
      filePickerContainer.style.display = filePickerContainer.style.display === 'none' ? 'block' : 'none';
    }



        // hover open textera 
    function toggletexttabscontaine() {
      const texttabscontainer = document.querySelector('.texttabs-container');
      texttabscontainer.style.display = texttabscontainer.style.display === 'none' ? 'block' : 'none';
    }



        //  dropdown
 

