// script.js

const surveyJson = {
  locale: "pt-br",
  title: "Pesquisa de Satisfação",
  description: "\n",
  logo: "images/cil-logo-blue.png",
  logoHeight: "130px",
  logoPosition: "right",
  widthMode: "static",
  width: "9in",
  pages: [
    {
      name: "page1",
      description:
        "Agradecemos por participar da nossa reunião. Sua opinião é valiosa para nós. Por favor, dedique alguns minutos para responder a este breve survey.",
      elements: [
        {
          type: "rating",
          name: "question1",
          title: "Como foi sua experiência nesta reunião?",
          isRequired: true,
          rateType: "smileys",
          scaleColorMode: "colored",
        },
      ],
    },
    {
      name: "page2",
      visibleIf: "{question1} <= 4",
      description:
        "Quais dos seguintes problemas afetaram sua experiência na reunião? (Selecione todas as opções que se aplicam)",
      elements: [
        {
          type: "checkbox",
          name: "question2",
          title: "Quais foram os problemas que afetaram sua experiência?",
          choices: [
            {
              value: "Item 1",
              text: "Qualidade do áudio",
            },
            {
              value: "Item 7",
              text: "Qualidade do vídeo",
            },
            {
              value: "Item 4",
              text: "Dificuldades para iniciar a reunião",
            },
            {
              value: "Item 5",
              text: "Sala de reunião desarrumada ou suja",
            },
            {
              value: "Item 6",
              text: "Interrupções ou ruídos externos",
            },
          ],
          showOtherItem: true,
          showNoneItem: true,
          otherText: "Outros (por favor, especifique):",
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "comment",
          name: "question3",
          title: 
            "Há algo que poderíamos melhorar para futuras reuniões? (Comentário opcional)\r\n\r\n",
        },
      ],
    },
  ],
};

const cssVariables = {
  "--sjs-font-size" : "22px",
  "--sjs-general-backcolor": "rgba(48, 48, 48, 1)",
  "--sjs-general-backcolor-dark": "rgba(58, 58, 58, 1)",
  "--sjs-general-backcolor-dim": "rgba(27, 27, 27, 1)",
  "--sjs-general-backcolor-dim-light": "rgba(33, 33, 33, 1)",
  "--sjs-general-backcolor-dim-dark": "rgba(47, 47, 47, 1)",
  "--sjs-general-forecolor": "rgba(255, 255, 255, 0.78)",
  "--sjs-general-forecolor-light": "rgba(255, 255, 255, 0.5)",
  "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 0.8)",
  "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 0.85)",
  "--sjs-primary-backcolor": "rgba(16, 226, 255, 1)",
  "--sjs-primary-backcolor-light": "rgba(0, 0, 0, 0.35)",
  "--sjs-primary-backcolor-dark": "rgba(129, 240, 255, 1)",
  "--sjs-primary-forecolor": "rgba(32, 32, 32, 1)",
  "--sjs-primary-forecolor-light": "rgba(32, 32, 32, 0.25)",
  "--sjs-base-unit": "8px",
  "--sjs-corner-radius": "4px",
  "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
  "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
  "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
  "--sjs-secondary-forecolor": "rgba(48, 48, 48, 1)",
  "--sjs-secondary-forecolor-light": "rgba(48, 48, 48, 0.25)",
  "--sjs-shadow-small": "0px 0px 0px 1px rgba(255, 255, 255, 0.28)",
  "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(255, 255, 255, 0.28)",
  "--sjs-shadow-medium": "0px 0px 0px 1px rgba(255, 255, 255, 0.25),0px 2px 6px 0px rgba(0, 0, 0, 0.2)",
  "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
  "--sjs-shadow-inner": "0px 0px 0px 1px rgba(255, 255, 255, 0.22)",
  "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(255, 255, 255, 0.22)",
  "--sjs-border-light": "rgba(255, 255, 255, 0.22)",
  "--sjs-border-default": "rgba(255, 255, 255, 0.22)",
  "--sjs-border-inside": "rgba(255, 255, 255, 0.08)",
  "--sjs-special-red": "rgba(254, 76, 108, 1)",
  "--sjs-special-red-light": "rgba(254, 76, 108, 0.1)",
  "--sjs-special-red-forecolor": "rgba(48, 48, 48, 1)",
  "--sjs-special-green": "rgba(36, 197, 164, 1)",
  "--sjs-special-green-light": "rgba(36, 197, 164, 0.1)",
  "--sjs-special-green-forecolor": "rgba(48, 48, 48, 1)",
  "--sjs-special-blue": "rgba(91, 151, 242, 1)",
  "--sjs-special-blue-light": "rgba(91, 151, 242, 0.1)",
  "--sjs-special-blue-forecolor": "rgba(48, 48, 48, 1)",
  "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
  "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
  "--sjs-special-yellow-forecolor": "rgba(48, 48, 48, 1)",
  "--sjs-article-font-xx-large-textDecoration": "none",
  "--sjs-article-font-xx-large-fontWeight": "700",
  "--sjs-article-font-xx-large-fontStyle": "normal",
  "--sjs-article-font-xx-large-fontStretch": "normal",
  "--sjs-article-font-xx-large-letterSpacing": "0",
  "--sjs-article-font-xx-large-lineHeight": "64px",
  "--sjs-article-font-xx-large-paragraphIndent": "0px",
  "--sjs-article-font-xx-large-textCase": "none",
  "--sjs-article-font-x-large-textDecoration": "none",
  "--sjs-article-font-x-large-fontWeight": "700",
  "--sjs-article-font-x-large-fontStyle": "normal",
  "--sjs-article-font-x-large-fontStretch": "normal",
  "--sjs-article-font-x-large-letterSpacing": "0",
  "--sjs-article-font-x-large-lineHeight": "56px",
  "--sjs-article-font-x-large-paragraphIndent": "0px",
  "--sjs-article-font-x-large-textCase": "none",
  "--sjs-article-font-large-textDecoration": "none",
  "--sjs-article-font-large-fontWeight": "700",
  "--sjs-article-font-large-fontStyle": "normal",
  "--sjs-article-font-large-fontStretch": "normal",
  "--sjs-article-font-large-letterSpacing": "0",
  "--sjs-article-font-large-lineHeight": "40px",
  "--sjs-article-font-large-paragraphIndent": "0px",
  "--sjs-article-font-large-textCase": "none",
  "--sjs-article-font-medium-textDecoration": "none",
  "--sjs-article-font-medium-fontWeight": "700",
  "--sjs-article-font-medium-fontStyle": "normal",
  "--sjs-article-font-medium-fontStretch": "normal",
  "--sjs-article-font-medium-letterSpacing": "0",
  "--sjs-article-font-medium-lineHeight": "32px",
  "--sjs-article-font-medium-paragraphIndent": "0px",
  "--sjs-article-font-medium-textCase": "none",
  "--sjs-article-font-default-textDecoration": "none",
  "--sjs-article-font-default-fontWeight": "400",
  "--sjs-article-font-default-fontStyle": "normal",
  "--sjs-article-font-default-fontStretch": "normal",
  "--sjs-article-font-default-letterSpacing": "0",
  "--sjs-article-font-default-lineHeight": "28px",
  "--sjs-article-font-default-paragraphIndent": "0px",
  "--sjs-article-font-default-textCase": "none"
}
  // Initialize SurveyJS
var survey = new Survey.Model(surveyJson);
console.log(SurveyTheme.SharpDark);
SurveyTheme.SharpDark.cssVariables = cssVariables
console.log(SurveyTheme.SharpDark);

document.addEventListener("DOMContentLoaded", function () {
  survey.render(document.getElementById("surveyContainer"));
  SurveyTheme.SharpDark.backgroundImage = "images/Virtual_Background-Dark-1200p.jpg",    
  SurveyTheme.SharpDark.backgroundImageAttachment = "fixed",
  SurveyTheme.SharpDark.backgroundImageFit = "cover",
  // "backgroundImageAttachment": "scroll",
  // "backgroundImageFit": "cover",
  survey.applyTheme(SurveyTheme.SharpDark);

});


function sendSurveyResultsToPHP(surveyData) {
    const urlParams = new URLSearchParams(window.location.search);
    const roomName = urlParams.get('roomName');
    const deviceId = urlParams.get('deviceId');
  
    if (!roomName || !deviceId) {
      console.error('Room name or device ID is missing in the URL parameters.');
      return;
    }
  
    const data = {
      roomName: roomName,
      deviceId: deviceId,
      surveyData: surveyData
    };
  
    fetch('webexbot.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success') {
        console.log('Success:', data);
      } else {
        console.error('Error:', data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
  
  survey.onComplete.add(function (result) {
    var surveyData = result.data;
    var questions = survey.getAllQuestions();
    var formattedData = {};
  
    questions.forEach(function (question) {
      var questionTitle = question.title;
      var questionName = question.name;
      var response = surveyData[questionName];
  
      if (response !== undefined) {
        if (Array.isArray(response)) {
          var choices = question.choices;
          var responseText = response.map(function (value) {
            if (value === "other") {
              return surveyData[questionName + "-Comment"];
            } else {
              var choice = choices.find(function (choice) {
                return choice.value === value;
              });
              return choice ? choice.text : value;
            }
          });
          formattedData[questionTitle] = responseText.join(", ");
        } else {
          formattedData[questionTitle] = response;
        }
      }
    });
  
    sendSurveyResultsToPHP(formattedData);
  });
