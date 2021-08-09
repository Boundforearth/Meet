import puppeteer from "puppeteer";

describe("show/hide an event details", () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".Event .displayed");
    expect(eventDetails).toBeNull();
  }, 30000);

  test("User can expand an event to see its details", async () => {
    await page.click(".Event .btn");
    const eventDetails = await page.$(".Event .displayed");
    expect(eventDetails).toBeDefined();
    expect(eventDetails).not.toBeNull();
  }, 30000);

  test("User can collapse an event to hide its details", async() => {
    await page.click(".Event .btn");
    const eventDetails = await page.$(".Event .displayed");
    expect(eventDetails).toBeNull();
  }, 30000)
});

describe("Filter events by city", () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    browser.close();
  });


  test("When a user hasn't searched for a city, show upcoming events from all cities", async() => {
    await page.waitForSelector(".EventList");
    const eventsDisplayed = await page.$(".events");
    expect(eventsDisplayed).toBeDefined();
    expect(eventsDisplayed).not.toBeNull();
  }, 30000);
  test("User should see a list of suggestions when they search for a city", async() => {
    const london = await page.$x("h2[contains(text(), 'Learn JavaScript')]");
    expect(london).toBeDefined();
    expect(london).not.toBeNull();
    await page.waitForSelector(".city");
    await page.type(".city", "Berlin");
    const suggestionsList = await page.$(".Germany");
    expect(suggestionsList).toBeDefined();
    expect(suggestionsList).not.toBeNull();
  }, 30000);
  test("User can select a city from the suggested list", async() => {
    await page.click(".Germany");
    const london = await page.$x("h2[contains(text(), 'Learn JavaScript')]");
    expect(london).toBeDefined();
    expect(london).not.toBeNull();
  }, 30000);
});
