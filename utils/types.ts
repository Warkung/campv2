export type FormContainerPropType = {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
};