import { chromium } from "playwright";

describe("StartScreen Web Tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Inicia el navegador
    browser = await chromium.launch({ headless: false }); // Cambia a true si no necesitas ver el navegador
    page = await browser.newPage();
    await page.goto("http://localhost:8081"); // Reemplaza con la URL de tu app web
  });

  afterAll(async () => {
    // Cierra el navegador al finalizar las pruebas
    await browser.close();
  });

  it("muestra el encabezado de bienvenida", async () => {
    // Verifica que el encabezado "Bienvenido al Login" esté visible
    const header = await page.$("text=Bienvenido al Login");
    expect(header).not.toBeNull();
  });

  it("muestra ambos botones de navegación", async () => {
    // Verifica que los botones "Log in" y "Crear Cuenta" estén visibles
    const loginButton = await page.$("text=Log in");
    const registerButton = await page.$("text=Crear Cuenta");

    expect(loginButton).not.toBeNull();
    expect(registerButton).not.toBeNull();
  });

  it("navega a la pantalla LoginScreen al presionar Log in", async () => {
    // Simula un clic en el botón "Log in"
    await page.click("text=Log in");

    // Verifica que la pantalla "LoginScreen" se muestre
    const loginScreen = await page.$("text=LoginScreen");
    expect(loginScreen).not.toBeNull();
  });

  it("navega a la pantalla RegisterScreen al presionar Crear Cuenta", async () => {
    // Simula un clic en el botón "Crear Cuenta"
    await page.click("text=Crear Cuenta");

    // Verifica que la pantalla "RegisterScreen" se muestre
    const registerScreen = await page.$("text=RegisterScreen");
    expect(registerScreen).not.toBeNull();
  });
});
