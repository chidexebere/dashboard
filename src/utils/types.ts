export type ConfigObject = {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
};

export type ProductObject = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: {
    id: number;
    name: string;
  };
  categories: ListObject[];
  implementationEffortText: string;
  investmentEffort: string;
  trl: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name: string;
    logo: string;
    address: {
      id: number;
      country: {
        name: string;
        region: string;
      };
      state: string;
      city: {
        name: string;
        countryId: number;
        stateId: number;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
      fallbackString: string;
      cityRegion: string;
    };
  };
  businessModels: ListObject[];
};

export type ListObject = {
  id: number;
  name: string;
};

export type TrlObject = {
  id: number;
  name: string;
  description: string;
};
