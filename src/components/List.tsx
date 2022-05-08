import { Dispatch, SetStateAction, useState } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/outline';
import { useAddProduct, useEditProduct } from '../api/hooks';

const inputClass = `form-control block px-3 py-1.5 text-sm text-gray-500 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none font-medium`;

interface EditListHeaderProps {
  name: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => void;
}

const EditListHeader = ({
  name,
  children,
  onChange,
  handleSubmit,
}: EditListHeaderProps) => {
  return (
    <form
      className="mb-3 flex flex-row items-center"
      onSubmit={handleSubmit}
      onClick={handleSubmit}
    >
      <label htmlFor="formInput"></label>
      <input
        type="text"
        className={`${inputClass} text-gray-700 bg-white`}
        id="formInput"
        placeholder="Add new"
        autoFocus={true}
        value={name}
        onChange={onChange}
      />
      {children}
    </form>
  );
};

interface AddListProps {
  onClick: (e: React.MouseEvent) => void;
}

const AddList = ({ onClick }: AddListProps) => {
  return (
    <div className="mb-3 cursor-pointer">
      <div
        className={`${inputClass} text-gray-700 bg-white font-light flex gap-x-1 items-center`}
        onClick={onClick}
      >
        <PlusIcon className="h-5 w-5 text-amber-400" aria-hidden="true" />
        <span>Add a new list</span>
      </div>
    </div>
  );
};

interface ListHeaderProps {
  name: string;
  handleClick: (e: React.MouseEvent) => void;
}
const ListHeader = ({ name, handleClick }: ListHeaderProps) => {
  return (
    <div className={`${inputClass} mb-3 cursor-pointer`} onClick={handleClick}>
      {name}
    </div>
  );
};

interface CreateListProps {
  newLists: ListObject[];
  setNewLists: Dispatch<SetStateAction<ListObject[]>>;
}

const CreateList = ({ newLists, setNewLists }: CreateListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const addNewList = useAddProduct();

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setName(value);
  };

  const handleAddList = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (name) {
      const newList = { id: Math.random(), name };
      addNewList.mutate(name);
      setNewLists([...newLists, newList]);
    }
    setName('');
    toggleForm();
  };

  return isOpen ? (
    <EditListHeader name={name} onChange={handleInputChange}>
      <div className="flex gap-x-1 items-center ml-2">
        <button
          className="text-white bg-amber-400 hover:bg-amber-400"
          onClick={handleAddList}
        >
          Add
        </button>
        <XIcon
          className="h-6 w-6 cursor-pointer"
          aria-hidden="true"
          onClick={toggleForm}
        />
      </div>
    </EditListHeader>
  ) : (
    <AddList onClick={toggleForm} />
  );
};

interface ListProps {
  listId: number;
  name: string;
}
const List = ({ listId, name }: ListProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const editNewList = useEditProduct();

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setNewName(value);
  };

  const handleEditList = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (newName) {
      editNewList.mutate({ id: listId, name: newName });
    }
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditListHeader
          name={newName}
          onChange={handleInputChange}
          handleSubmit={handleEditList}
        />
      ) : (
        <ListHeader name={newName} handleClick={handleEditing} />
      )}
    </>
  );
};

interface ListGroupProps {
  lists: ListObject[];
  title: string;
}
const ListGroup = ({ lists, title }: ListGroupProps) => {
  const [newLists, setNewLists] = useState(lists);
  return (
    <div className="my-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-900">{title}</h2>
        <CreateList newLists={newLists} setNewLists={setNewLists} />
      </div>
      <div className="my-2 flex flex-wrap gap-x-2">
        {newLists.map((list) => (
          <div key={`${list.id}`}>
            <List name={list.name} listId={list.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { EditListHeader, ListHeader, AddList, List, ListGroup };
