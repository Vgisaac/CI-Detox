import { expect, by, device, element } from "detox";

describe("StartScreen", () => {
  beforeAll(async () => {
    await device.launchApp(); // Inicia la app
  });

  beforeEach(async () => {
    await device.reloadReactNative(); // Recarga React Native antes de cada prueba
  });

  it("muestra el encabezado de bienvenida", async () => {
    // Verifica que el encabezado sea visible
    await expect(element(by.text("Bienvenido al Login"))).toBeVisible();
  });

  it("muestra ambos botones de navegación", async () => {
    // Verifica que los botones de "Log in" y "Crear Cuenta" estén visibles
    await expect(element(by.text("Log in"))).toBeVisible();
    await expect(element(by.text("Crear Cuenta"))).toBeVisible();
  });

  it("navega a la pantalla LoginScreen al presionar Log in", async () => {
    // Simula un toque en el botón "Log in"
    await element(by.text("Log in")).tap();

    // Verifica que se navega a la pantalla "LoginScreen"
    await expect(element(by.text("LoginScreen"))).toBeVisible(); // Cambia el texto si LoginScreen tiene otro contenido
  });

  it("navega a la pantalla RegisterScreen al presionar Crear Cuenta", async () => {
    // Simula un toque en el botón "Crear Cuenta"
    await element(by.text("Crear Cuenta")).tap();

    // Verifica que se navega a la pantalla "RegisterScreen"
    await expect(element(by.text("RegisterScreen"))).toBeVisible(); // Cambia el texto si RegisterScreen tiene otro contenido
  });
});