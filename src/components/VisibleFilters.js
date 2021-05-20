import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actiuons";
import { VISIBLE_FILTERS } from "../constants";
import cx from "classnames";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBLE_FILTERS).map(filterKey => {
                const currentFilter = VISIBLE_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
            {currentFilter}
          </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};

export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);