function download() {
	var textToSave = "VIKRAM KUMAR U\n640,Senthu Kinaru Street, Thenimalai,\nTiruvannamalai - 606603.\n9514945463 | vikramkumaru28@gmail.com\n======================================================================================\nObjective\n============\nI seek challenging opportunities where I can fully use my skills for the success of the organization.\n======================================================================================\nEducation\n============\nSSLC\nDr.V.Genguswamy Metric Higher Secondary School.Tiruvannamalai.\n74.5%\n2016\n============\nHSC\nDr.V.Genguswamy Metric Higher Secondary School.Tiruvannamalai.\n62.9%\n2018\n============\nB.Sc. Mathematics\nKaran Arts And Science College.Tiruvannamalai.\n80.5%\n2021\n======================================================================================\nExperience\n============\nArunai Info Services Company\n01-01-2023 - Present\nBPO And IOT-Trainer\nBPO ( OCR conversion, e-printing , Keying, tagging ) in 1 Year otherwise Team Leader in 6 Months.\nTaken IOT classes in more than 15 arts & science colleges, under “NASSCOM” Social responsibility program.\nMight have trained around 1000 students.\n======================================================================================\nSkills\n==============\nMs. Word\nMs. Excel\nTypewriter\nHtml\nCss\nPython\nMySql\n======================================================================================\nLanguages\n=============\nEnglish\nTelugu\nTamil\n======================================================================================\nPersonal Details\n============\nDate of Birth : 28/03/2001\nMarital Status : Single\nNationality : Indian\nReligion : Hindu\nGender : Male\nFather's Name : UMAPATHI M\nMother's Name : KALAIVANI U\n======================================================================================\nDeclaration\n============\nI hereby declare that all the information given above is true and correct to the best of my knowledge";

    var blob = new Blob([textToSave], { type: "text/pdf;charset=utf-8" });
    var fileName = "Canditate_Login.pdf";
	
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()