import { HttpRequest } from '@azure/functions';

export const ValidateEventGridWebHook = class {
    private _request: HttpRequest;
    constructor(request: HttpRequest) {
        this._request = request;
    };

    createValidationResponse() {
        return {
            status: 200,
            body: {
                validationResponse: this._request.body[0].data.validationCode
            }
        };
    };
}