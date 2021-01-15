import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";
import {updateStatus} from "../../../redux/profile-reducer";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it' updateStatus={updateStatus}/>);
        const instance = component.getInstance();

        // @ts-ignore
        expect(instance.state.status).toBe('it');
    })
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='it' updateStatus={updateStatus}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status='it' updateStatus={updateStatus}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('it');
    });
    test('input should be dusplayed in editMode instea of span', () => {
        const component = create(<ProfileStatus status='it' updateStatus={updateStatus}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it');
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='it' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})