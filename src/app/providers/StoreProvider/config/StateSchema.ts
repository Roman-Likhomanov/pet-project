import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    count: CounterSchema
    user: UserSchema
}
