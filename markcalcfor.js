// Calculate semester 3 marks 

  
function calculateMarks_for3() {
    event.preventDefault();
  
    // Retrieve input values
    var forepm_ex = parseFloat(document.getElementById('forepm_ex').value);
    var forepm_td = parseFloat(document.getElementById('forepm_td').value);
    var for3math_ex = parseFloat(document.getElementById('for3math_ex').value);
    var for3math_td = parseFloat(document.getElementById('for3math_td').value);
    var for3prob_ex = parseFloat(document.getElementById('for3prob_ex').value);
    var for3prob_td = parseFloat(document.getElementById('for3prob_td').value);
    var for3mec_ex = parseFloat(document.getElementById('for3mec_ex').value);
    var for3mec_td = parseFloat(document.getElementById('for3mec_td').value);
    var for3vom_ex = parseFloat(document.getElementById('for3vom_ex').value);
    var for3vom_td = parseFloat(document.getElementById('for3vom_td').value);
    var for3vom_tp = parseFloat(document.getElementById('for3vom_tp').value);
    var for3prog_ex = parseFloat(document.getElementById('for3prog_ex').value);
    var for3prog_td = parseFloat(document.getElementById('for3prog_td').value);
    var for3geo_ex = parseFloat(document.getElementById('for3geo_ex').value);
    var for3geo_td = parseFloat(document.getElementById('for3geo_td').value);
    var for3des_ex = parseFloat(document.getElementById('for3des_ex').value);
    var for3eng = parseFloat(document.getElementById('for3eng').value);
    // Perform the calculation
    var for3total = ((forepm_ex+forepm_td)/2) * 2.5 + ((for3math_ex+for3math_td)/2)*2 + (for3prob_ex+for3prob_td) +
    ((for3mec_ex+for3mec_td)/2)*2 + ((for3vom_ex+for3vom_td+for3vom_tp)/3) * 2.5 +
    ((for3geo_ex+for3geo_td)/2)*2 + for3des_ex + for3eng + (for3prog_ex+for3prog_td)/2;
    var for3average = for3total / 16;
  
    // Display the result
    document.getElementById('for3_result').innerHTML = 'Your semester average is: ' + for3average.toFixed(2);
  }