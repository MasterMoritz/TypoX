
export class UpdateAsciiMathEquation {
    static readonly type = 'UpdateAsciiMathEquation';

    constructor(public equation: string) {}
}

export class AddToAsciiMathEquation {
    static readonly type = 'AddToAsciiMathEquation';

    constructor(public equation: string) {}
}

export class UpdateTexEquation {
    static readonly type = 'UpdateTexEquation';

    constructor(public equation: string) {}
}
