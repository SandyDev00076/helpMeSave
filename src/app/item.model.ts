import { PriorityScale } from './priority.enum';
import { PossessionStatus } from './possessionStatus.enum';

export interface Item {
    name: string;
    price: number;
    description: string;
    priority: PriorityScale;
    emiAvailable: boolean;
    emiMonthly?: number;
    status: PossessionStatus;
}