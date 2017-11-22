import React, { Component } from 'react';

import SortLink from './SortLink.jsx';

export default class Sort extends Component {
    render() {

        return (
          <tr>
            <th></th>
            <th>
              <div>
                <SortLink sort="NEWEST">Newest</SortLink>
                <SortLink sort="OLDEST">Oldest</SortLink>
              </div>
            </th>
            <th>
              <div>
                <SortLink sort="BEST">Best</SortLink>
                <SortLink sort="WORST">Worst</SortLink>
              </div>
            </th>
          </tr>
        );
    }
}
