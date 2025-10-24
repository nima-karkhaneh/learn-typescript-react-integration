import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
  ref: React.Ref<FormHandle>
};

const Form = ({ onSave, children, ref, ...otherProps }: FormProps) => {
  const form = useRef<HTMLFormElement>(null)

  useImperativeHandle(ref, () => ({
    clear() {
       console.log('CLEARING');
      form.current?.reset();
    },
  }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
};

export default Form;