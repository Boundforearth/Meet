import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]}/>);
  });


  test("render the event title", () => {
    expect(EventWrapper.find(".summary").text()).toBe(mockData[0].summary);
  });


  test("render the date", () => {
    expect(EventWrapper.find(".start-time").text()).toBe(mockData[0].start.dateTime);
  });


  test("render the timezone", () => {
    expect(EventWrapper.find(".time-zone").text()).toBe(mockData[0].start.timeZone);
  });


  test("render event @ and city", () => {
    expect(EventWrapper.find(".location").text()).toBe(`@${mockData[0].summary} | ${mockData[0].location}`)
  });


  test("render the show button", () => {
    expect(EventWrapper.find(".btn")).toHaveLength(1);
  });


  test("hide details by default", () => {
    const detailsState = EventWrapper.state("toggleDetails");
    expect(detailsState).toBe(false);
  });


  test("change state to true button is clicked", () => {
    EventWrapper.find(".btn").simulate("click");
    expect(EventWrapper.state("toggleDetails")).toBe(true);
  });


  test("change state back to false when button is clicked", () => {
    EventWrapper.setState({
      toggleDetails: true
    });
    EventWrapper.find(".btn").simulate("click");
    expect(EventWrapper.state("toggleDetails")).toBe(false);
  });


  test("details are hidden by default", () => {
    expect(EventWrapper.find(".hidden")).toHaveLength(1);
  });


  test("details are shown on button click", () => {
    EventWrapper.find(".btn").simulate("click");
    expect(EventWrapper.find(".displayed")).toHaveLength(1);
  });


  test("details are hidden upon click when details shown", () => {
    EventWrapper.setState({
      toggleDetails: true
    });
    EventWrapper.find(".btn").simulate("click");
    expect(EventWrapper.find(".hidden")).toHaveLength(1);
  });


  test("description is displayed when details are shown", () => {
    expect(EventWrapper.find(".description").text()).toBe(mockData[0].description)
  });


  test("button text changes when clicked", () => {
    EventWrapper.find(".btn").simulate("click");
    expect(EventWrapper.find(".btn").text()).toBe("Hide Details");
  });


  test("button text reverts when clicked agaon", () => {
    EventWrapper.setState({
      toggleDetails: true
    });
    EventWrapper.find(".btn").simulate("click");
    expect(EventWrapper.find(".btn").text()).toBe("Show Details");
  });
});