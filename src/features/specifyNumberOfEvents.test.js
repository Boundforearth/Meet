import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import EventList from "../EventList";
import {  mount } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {
  test('When a user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('The user is browsing some list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('The user has not specified the number of events to show', () => {
      AppWrapper.update();
    });

    then('The number of events to show will default to 32', () => {
      expect(AppWrapper.state("displayCount")).toBe(32);
      expect(AppWrapper.find(EventList).find(".events")).toHaveLength(2);
      AppWrapper.unmount()
    });
  });

  test('The user can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('The user is browsing a list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('The user enters in a number', () => {
      AppWrapper.update();
      expect(AppWrapper.find(EventList).find(".events")).toHaveLength(2);
      const value = {target: { value: 1}}
      AppWrapper.find(NumberOfEvents).find(".number").simulate("change", value);
    });

    then('The number of events showing will change to the selected number', () => {
      AppWrapper.update();
      expect(AppWrapper.state("displayCount")).toBe(1);
      expect(AppWrapper.find(EventList).find(".events")).toHaveLength(1);
      AppWrapper.unmount();
    });
  });
});
