export default {
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{type: "reference", to:{type: "social"}}],
    }
  ],
};
