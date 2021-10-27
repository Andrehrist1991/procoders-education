// Modules
import React from "react";

// Components
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginPage() {

    console.log(process.env);
    return (
        <div className="app-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-xl-4">
                    <Form className="mt-5">
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button className="mt-5">Отправить</Button>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
