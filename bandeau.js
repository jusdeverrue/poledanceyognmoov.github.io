document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("bandeau-stage")) return;
  var b = document.createElement("a");
  b.id = "bandeau-stage";
  b.href = "sms:+33632514950?body=Bonjour%20Julie%2C%20je%20souhaite%20r%C3%A9server%20une%20initiation%20%C3%A0%20la%20pole%20dance%20chez%20Yog%27n%20Moov.%20Merci%20!";
  b.innerHTML = "Stage d’initiation pole dance · lundi 9 novembre à 19h ou samedi 21 novembre à 10h · 25 € · <u>Réserve ta place</u> →";
  b.style.cssText = "position:sticky;top:0;z-index:9999;display:block;background:#80334f;color:#f8f0e4;text-align:center;padding:12px 16px;font:bold 14px/1.5 Arial,Helvetica,sans-serif;text-decoration:none;border-bottom:3px solid #c7a35d;";
  document.body.prepend(b);
});
