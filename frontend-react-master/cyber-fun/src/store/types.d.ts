export interface ILevel {
    id: number;
    hasStarted?: boolean;
    finding0?: boolean;
    finding1?: boolean;
    finding2?: boolean;
    finding3?: boolean;
}

export interface LevelState {
    levels: ILevel[];
}

export interface LevelAction {
    type: string;
    level: ILevel;
}

export type DispatchType = (args: LevelAction) => LevelAction;
