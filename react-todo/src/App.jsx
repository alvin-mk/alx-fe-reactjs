import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Jest')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'Write tests' },
    });
    fireEvent.click(screen.getByText('Add Todo'));

    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('can toggle a todo completion status', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Complete', { selector: 'button' }));

    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
