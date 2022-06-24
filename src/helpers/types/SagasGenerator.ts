import {AxiosResponse} from 'axios';

export type SagaGenerator<T = any> = Generator<unknown, void, AxiosResponse<T>>;
