import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("render text input", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });
  test("default value of input is 32", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(32);
  });
  test("state changes to user input", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    const eventObject = { target: {value: 16}};
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("displayCount")).toBe(16);
  })
})