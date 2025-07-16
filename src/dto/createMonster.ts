export interface CreateMonsterDto {
  name: string;
  elements: {
    name: string;
    type: 'MAIN' | 'WEAKNESS';
  }[];

  set?: {
    name: string;
    pieces: {
      name: string;
      type: 'HELMET' | 'ARMOR' | 'GAUNTLETS' | 'BELT' | 'GREAVES';
      skillRefs?: {
        name: string;
        description: string;
      }[];
    }[];
  };
}
