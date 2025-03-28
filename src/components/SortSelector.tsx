import { BsChevronDown } from 'react-icons/bs';
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedOrder: string;
    }

const SortSelector = ({ onSelectSortOrder, selectedOrder}: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance'},
        { value: '-added', label: 'Date added'},
        { value: 'name', label: 'Name'},
        { value: '-released', label: 'Release date'},
        { value: '-metacritic', label: 'Popularity'},
        { value: '-rating', label: 'Average rating'}
        ]

    const currentSortOrder = sortOrders.find(sortOrder => sortOrder.value === selectedOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: { currentSortOrder?.label || 'Relevance' }
            </MenuButton>
            <MenuList>
                    { sortOrders.map(order =>
                        <MenuItem onClick={ () => onSelectSortOrder(order.value) }
                                  value={order.value}
                                  key={order.value} value={order.value}>
                         {order.label}
                        </MenuItem>
                        )}
            </MenuList>
        </Menu>
        );
    };

export default SortSelector;