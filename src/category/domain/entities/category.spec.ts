import { Category } from "./category";
import {omit} from 'lodash';

describe("Category Unit Tests", () => {

    test("constructor of category", () => {
        let category = new Category({ name: "Movie" });
        let props = omit(category.props, "created_at");
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true,
        });
        expect(category.props.created_at).toBeInstanceOf(Date);

        let created_at = new Date();
        category = new Category({
            name: "Movie",
            description: "some description",
            is_active: false,
        });

        expect()
    });
});