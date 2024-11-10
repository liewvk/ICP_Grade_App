export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getGrade' : IDL.Func([IDL.Int], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
