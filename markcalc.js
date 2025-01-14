
// Calculate semester marks
function calculateMarks() {
  event.preventDefault();

  // Retrieve input values
  var elec_ex = parseFloat(document.getElementById('elec_ex').value);
  var elec_tp = parseFloat(document.getElementById('elec_tp').value);
  var math_ex = parseFloat(document.getElementById('math_ex').value);
  var math_td = parseFloat(document.getElementById('math_td').value);
  var prob_ex = parseFloat(document.getElementById('prob_ex').value);
  var prob_td = parseFloat(document.getElementById('prob_td').value);
  var mec_ex = parseFloat(document.getElementById('mec_ex').value);
  var mec_td = parseFloat(document.getElementById('mec_td').value);
  var vom_ex = parseFloat(document.getElementById('vom_ex').value);
  var vom_td = parseFloat(document.getElementById('vom_td').value);
  var vom_tp = parseFloat(document.getElementById('vom_tp').value);
  var prog_ex = parseFloat(document.getElementById('prog_ex').value);
  var prog_td = parseFloat(document.getElementById('prog_td').value);
  var prog_tp = parseFloat(document.getElementById('prog_tp').value);
  var pip_ex = parseFloat(document.getElementById('pip_ex').value);
  var des_ex = parseFloat(document.getElementById('des_ex').value);
  var eng = parseFloat(document.getElementById('eng').value);
  // Perform the calculation
  var total = ((elec_ex + elec_tp) / 2) * 2 + ((math_ex + math_td) / 2) * 2 + ((prob_ex + prob_td) / 2) * 2
  + des_ex + pip_ex + eng+  ((mec_ex+mec_td) / 2) * 2 + ((vom_ex + vom_td + vom_tp) / 3 ) * 2.5 + ((prog_ex+prog_td+prog_tp)/3)
  var average = total / 14.5;

  // Display the result
  document.getElementById('result').innerHTML = 'Your semester average is: ' + average.toFixed(2);
}
function dismissMessage() {
  const entryMessage = document.getElementById('entry-message');
  entryMessage.style.display = 'none';
}




