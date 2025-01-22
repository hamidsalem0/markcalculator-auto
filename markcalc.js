
// Calculate semester 3 marks 
function calculateMarks_s3() {
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
  var average_s3 = total / 14.5;

  // Display the result
  document.getElementById('result_s3').innerHTML = 'Your semester average is: ' + average_s3.toFixed(2);
}
function dismissMessage() {
  const entryMessage = document.getElementById('entry-message');
  entryMessage.style.display = 'none';
}
// Calculate semester 4 marks 
function calculateMarks_s4() {
  event.preventDefault();

  // Retrieve input values
  var math5_ex = parseFloat(document.getElementById('math5_ex').value);
  var math5_td = parseFloat(document.getElementById('math5_td').value);
  var metho_ex = parseFloat(document.getElementById('metho_ex').value);
  var metho_td = parseFloat(document.getElementById('metho_td').value);
  var meselec_ex = parseFloat(document.getElementById('meselec_ex').value);
  var meselec_td = parseFloat(document.getElementById('meselec_td').value);
  var meselec_tp = parseFloat(document.getElementById('meselec_tp').value);
  var rss_ex = parseFloat(document.getElementById('rss_ex').value);
  var rss_td = parseFloat(document.getElementById('rss_td').value);
  var maapp_ex = parseFloat(document.getElementById('maapp_ex').value);
  var maapp_td = parseFloat(document.getElementById('maapp_td').value);
  var electech2_ex = parseFloat(document.getElementById('electech2_ex').value);
  var electech2_td = parseFloat(document.getElementById('electech2_td').value);
  var elecfo_ex = parseFloat(document.getElementById('elecfo_ex').value);
  var elecfo_td = parseFloat(document.getElementById('elecfo_td').value);
  var elecfo_tp = parseFloat(document.getElementById('elecfo_tp').value);
  var teco_ex = parseFloat(document.getElementById('teco_ex').value);
  var eng_s4 = parseFloat(document.getElementById('eng_s4').value);
  // Perform the calculation
  var total_s4 = ((math5_ex + math5_td) / 2) * 2 + ((metho_ex + metho_td) / 2) * 2 + ((meselec_ex + meselec_td + meselec_tp) / 3) * 3
  + ((rss_ex+rss_td ) / 2) * 3 + ((maapp_ex+maapp_td) / 2 ) * 2 + ((electech2_ex+electech2_td) / 2 ) * 2
  + ((elecfo_ex+elecfo_td+elecfo_tp) / 3) * 2 + teco_ex + eng_s4;
  var average_s4 = total_s4 / 18;

  // Display the result
  document.getElementById('result_s4').innerHTML = 'Your semester average is: ' + average_s4.toFixed(2);
}
function switchToS4() {
  window.location.href = "index_S4.html";
}
function switchToS3() {
  window.location.href = "index.html";
}





