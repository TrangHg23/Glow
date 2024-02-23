import { render } from '@testing-library/react';
import Slider from './index';

describe('Slider', () => {
    it('should render slider image', () => {
        const { getByAltText } = render(
            <Slider largeImg={'large image'} smallImg={'small image'} subTitle={'subTitle'} mainTitle={'mainTitle'} desc={'description'} />
        );
        expect(getByAltText('large slider')).toBeInTheDocument();
        expect(getByAltText('small slider')).toBeInTheDocument();
    });

    it('should render sub title', () => {
        const { getByText } = render(
            <Slider largeImg={'large image'} smallImg={'small image'} subTitle={'subTitle'} mainTitle={'mainTitle'} desc={'description'} />
        );
        expect(getByText('subTitle')).toBeInTheDocument();
    });

    it('should render main title', () => {
        const { getByText } = render(
            <Slider largeImg={'large image'} smallImg={'small image'} subTitle={'subTitle'} mainTitle={'mainTitle'} desc={'description'} />
        );
        expect(getByText('subTitle')).toBeInTheDocument();
    });

    it('should render description', () => {
        const { getByText } = render(
            <Slider largeImg={'large image'} smallImg={'small image'} subTitle={'subTitle'} mainTitle={'mainTitle'} desc={'description'} />
        );
        expect(getByText('subTitle')).toBeInTheDocument();
    });
});
