// ============================================
// Google Apps Script — ImmoAI Formulaire
// À coller dans l'éditeur Apps Script
// ============================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = e.parameter;

    sheet.appendRow([
      new Date(),
      data.q1 || '',
      data.q2 || '',
      data.q3 || '',
      data.q4 || '',
      data.email || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function initialiserFeuille() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date', 'Tâche chronophage', 'Gestion relances', 'Outils digitaux', 'Gain de temps', 'Email']);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  }
}
