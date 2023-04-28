import { Team } from '../interfaces/team.interface';

export type TeamDropdownItem = Pick<Team, 'id' | 'full_name'>;
