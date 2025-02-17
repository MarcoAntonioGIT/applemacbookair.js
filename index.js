const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());
const { executablePath } = require('puppeteer')

const url_16 = "https://www.apple.com/br/shop/buy-mac/macbook-pro/14-polegadas-preto-espacial-tela-padr%C3%A3o-chip-m4-da-apple-com-cpu-de-10-n%C3%BAcleos-e-gpu-de-10-n%C3%BAcleos.-16-gb-de-mem%C3%B3ria-512gb"
async function givePage() {
  const browser = await puppeteer.launch({headless: false, executablePath: executablePath()});
  let page = await browser.newPage();
  return page;
}

async function run(){
  let page = await givePage();
  await page.goto(url_16);
  await add_to_cart(page);
  await shipping(page);
}

async function add_to_cart(page) {
  await smart_click(page, "input[id='display_z1ds_065_chjx_2']", 0)
  await smart_click(page, "input[id='memory_aos_phantom_z1ds_065_chhy_3']", 0)
  await smart_click(page, "input[id='hard_drivesolid_state_drive_aos_phantom_z1ds_065_chj1_2']", 0)
  await smart_click(page, "input[id='power_adapter_aos_phantom_z1ds_065_chj5_2']", 0)
  await smart_click(page, "input[id='sw_logic_pro_z1ds_065_chlg_2']", 0)
  await smart_click(page, "button[name='add-to-cart']", 0);
}

async function shipping(page){
  await smart_click(page, "button[name='proceed']", 0);
  await smart_click(page, "[id='shoppingCart.actions.navCheckout']", 0);
  await smart_click(page, "[id='signIn.guestLogin.guestLogin']", 100);
  
  selector = "input[id='checkout.fulfillment.deliveryTab.delivery.deliveryLocation.address.postalCode']"
  await page.waitForSelector(selector)
  await page.type(selector, "95150000")
}

//helper function
async function smart_click(page, selector){
  await page.waitForSelector(selector)
  await page.evaluate((selector) => document.querySelector(selector).click(), selector)
  await new Promise(r => setTimeout(r, pause));
}

run()