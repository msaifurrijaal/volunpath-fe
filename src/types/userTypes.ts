export type VolunteerData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullname: string;
  phone: string;
  address: string;
  city: string;
  role: 'volunteer';
  volunteerDetail: {
    skills: string;
    education: string;
    other_details: string;
  };
};

export type OrganizationData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullname: string;
  phone: string;
  address: string;
  city: string;
  role: 'organization';
  organizationDetail: {
    name: string;
    address: string;
    focus: string;
    description: string;
  };
};
