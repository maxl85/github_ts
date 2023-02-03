import { IGithubUser } from '../types';

export const isGuthubUser = (user: any): user is IGithubUser => 'id' in user;