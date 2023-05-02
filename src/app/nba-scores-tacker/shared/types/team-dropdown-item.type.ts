import { Team } from '../models/team.model';

export type TeamDropdownItem = Pick<Team, 'id' | 'full_name'>;
