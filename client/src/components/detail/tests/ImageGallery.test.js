import { render, fireEvent, screen } from '@testing-library/react';
import ImageGallery from '../imageGallery/ImageGallery';
import renderWithProviders from './renderWithProviders';

const style = [
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  }
];

const anotherStyle = [
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
  },
  {
    thumbnail_url:
      'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  }
];

const expandViewController = jest.fn();

describe('ImageGallery', () => {
  let defaultImage;
  let expandedImage;
  test('should display default image when landing the page', () => {
    renderWithProviders(
      <ImageGallery style={style} expandViewController={expandViewController} />
    );
    defaultImage = screen.queryAllByTestId('default-view-image');
    expandedImage = screen.queryAllByTestId('expand-view-image');
    expect(defaultImage).toHaveLength(1);
    expect(expandedImage).toHaveLength(0);
  });
  test('should display expanded image', () => {
    renderWithProviders(
      <ImageGallery style={style} expandViewController={expandViewController} />
    );
    fireEvent.click(screen.getByTestId('default-view-image'));
    defaultImage = screen.queryAllByTestId('default-view-image');
    expandedImage = screen.queryAllByTestId('expand-view-image');
    expect(defaultImage).toHaveLength(0);
    expect(expandedImage).toHaveLength(1);
    expect(expandViewController).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('expand-icon'));
    defaultImage = screen.queryAllByTestId('default-view-image');
    expandedImage = screen.queryAllByTestId('expand-view-image');
    expect(defaultImage).toHaveLength(1);
    expect(expandedImage).toHaveLength(0);
    expect(expandViewController).toHaveBeenCalledTimes(2);
  });
  test('the image display list should changed when arrow is clicked', () => {
    renderWithProviders(
      <ImageGallery style={style} expandViewController={expandViewController} />
    );
    let displayList = screen.getAllByTestId('square-image');
    expect(displayList[0].src).toContain(style[0].url);
    fireEvent.click(displayList[0]);

    fireEvent.click(screen.getByTestId('down-arrow'));
    displayList = screen.queryAllByTestId('square-image');
    expect(displayList[0].src).toContain(style[1].url);

    fireEvent.click(screen.getByTestId('up-arrow'));
    displayList = screen.queryAllByTestId('square-image');
    expect(displayList[0].src).toContain(style[0].url);

    fireEvent.click(screen.getByTestId('expand-icon'));
    fireEvent.mouseMove(screen.getByTestId('expand-view-image'));
  });
  test('should change the image in the main section', () => {
    renderWithProviders(
      <ImageGallery style={style} expandViewController={expandViewController} />
    );
    let displayList;

    fireEvent.click(screen.getAllByTestId('square-image')[6]);

    fireEvent.click(screen.getByTestId('left-arrow'));
    displayList = screen.queryByTestId('default-view-image');
    expect(displayList.src).toContain(style[5].url);

    fireEvent.click(screen.getByTestId('right-arrow'));
    displayList = screen.queryByTestId('default-view-image');
    expect(displayList.src).toContain(style[6].url);

    fireEvent.click(screen.getByTestId('default-view-image'));
    fireEvent.click(screen.getByTestId('expand-view-image'));
  });

  test('should take image display list argument', () => {
    renderWithProviders(
      <ImageGallery
        style={anotherStyle}
        expandViewController={expandViewController}
      />
    );
    let displayList = screen.getAllByTestId('square-image');
    expect(displayList).toHaveLength(2);
  });
});
