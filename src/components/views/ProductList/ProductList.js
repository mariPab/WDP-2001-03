import React from 'react';
import styles from './ProductList.module.scss';
import SortBy from '../../features/SortBy/SortBy';
import Show from '../../features/Show/Show';
import ViewOptions from '../../features/ViewOptions/ViewOption';
import FilterByCategories from '../../features/FilterByCategories/FilterByCategories';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-9'>
          <div
            className={
              'row no-gutters align-items-center justify-content-between ' +
              styles.heading
            }
          >
            <div className={'col-auto ' + styles.category}>{'FURNITURE'}</div>
            <div className={'col-auto ' + styles.sortBy}>
              <Show />
            </div>
            <div className={'col-auto ' + styles.show}>
              <SortBy />
            </div>
            <ViewOptions />
          </div>
        </div>
        <div className='col-md-3'>
          <FilterByCategories />
          <div>Filter by price</div>
          <div>Filter by color</div>
          <div>Filter by size</div>
          <div>Filter by tag</div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductList;
