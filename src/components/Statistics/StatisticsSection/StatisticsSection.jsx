import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics/StatisticsItem/StatisticsItem';
import { StatisticsSection } from 'components/Statistics/StatisticsSection/StatisticsSection.styled';
import { StatisticsTitle } from 'components/Statistics/StatisticsSection/StatisticsTitle.styled';
import { List } from 'components/Statistics/StatisticsSection/StatisticsBoard.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>
      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
