import { Request, Response} from 'express';


export const newUser = (req: Request, res: Response) =>{

    const { body } = req;

    res.json({
        message: 'New user',
        body: body
    });
}
export const loginUser = (req: Request, res: Response) =>{
    console.log(req.body);

    res.json({
        message: 'Login user',
        body: req.body
    });
}