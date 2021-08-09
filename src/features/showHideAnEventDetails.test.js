import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import Event from "../Event";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventDetails.feature");

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventWrapper
    given('The main page is loaded', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    when('The user is looking at an event', () => {
      EventWrapper.update();
      expect(EventWrapper.find(".Event")).toHaveLength(1);
    });

    then('The event’s details will be collapsed', () => {
      expect(EventWrapper.state("toggleDetails")).toBe(false);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper
    given('The user is looking through the events', () => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
        expect(EventWrapper.find(".Event")).toHaveLength(1);
    });

    when('The user clicks a “show details” button', () => {
      EventWrapper.find(".btn").simulate("click");
    });

    then('Details for the event are expanded', () => {
      EventWrapper.update();
      expect(EventWrapper.state("toggleDetails")).toBe(true);
      expect(EventWrapper.find(".displayed")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide it’s details', ({ given, when, then }) => {
    let EventWrapper
    given('The user has expanded an event’s details', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({
        toggleDetails: true
      })
      expect(EventWrapper.find(".displayed")).toHaveLength(1);
    });

    when('The user clicks a “hide details” button', () => {
      EventWrapper.find(".btn").simulate("click");
    });

    then('The Event details will collapse', () => {
      EventWrapper.update();
      expect(EventWrapper.state("toggleDetails")).toBe(false);
      expect(EventWrapper.find(".displayed")).toHaveLength(0);
    });
  });
});

