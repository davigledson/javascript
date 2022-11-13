const puppeteer = require('puppeteer');

console.log('Robo que acessa sites');


async function robo(){
const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const moedaBase='dolar';
  const moedaFinal='real';
  const qualqueURL = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIwNzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`;
  await page.goto(qualqueURL);
  //await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector(".lWzCpb.a61j6").value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)

 // await browser.close();

}


robo()

  