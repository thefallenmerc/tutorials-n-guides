File: `C:\Workspace\Playground\Node\validator\src\controllers\apicontroller.ts`
```typescript
import { Request, Response } from "express";

import LoginValidator from "../validators/login_validator";

export default class ApiController {
    public static login(req: Request, res: Response) {
        const validator = new LoginValidator(req);

        if (validator.fails()) {
            return res.json({ message: "lol", errors: validator.errors });
        }
        return res.json({ message: "lol", data: validator.validated, fails: validator.fails() });
    }
}

```


File: `C:\Workspace\Playground\Node\validator\src\index.ts`
```typescript
import express, { Request, Response } from "express";

import ApiController from "./controllers/apicontroller";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/login", ApiController.login);

app.use("**", (req: Request, res: Response) => {
    res.json({ message: "testvalidations" });
});

app.listen(1200);

```


File: `C:\Workspace\Playground\Node\validator\src\validators\login_validator.ts`
```typescript
import { Request } from "express";
import Validator from "./validator";

export default class LoginValidator extends Validator {

    protected rules = {
        email: "email|required",
        password: "string|required",
    };

}

```


File: `C:\Workspace\Playground\Node\validator\src\validators\validator.ts`
```typescript
import { Request } from "express";
import ValidatorJS from "validatorjs";

export default class Validator {

    public validated: object;

    protected isValidated = false;
    protected messages: object;
    protected rules: object;
    protected request: Request;
    protected validator: ValidatorJS;

    constructor(request: Request) {
        this.request = request;
    }

    public fails() {
        this.validate();
        return this.validator.fails();
    }

    public passes() {
        this.validate();
        return this.validator.passes();
    }

    get errors(): object {
        this.validate();
        return this.validator.errors.all();
    }

    protected validate() {
        if (!this.isValidated) {
            this.validator = new ValidatorJS(this.request.body, this.rules, this.messages);
            this.validated = {};
            for (const rule in this.rules) {
                if (this.rules.hasOwnProperty(rule)) {
                    this.validated[rule] = this.request.body[rule];
                }
            }
            this.isValidated = true;
        }
    }

}

```
