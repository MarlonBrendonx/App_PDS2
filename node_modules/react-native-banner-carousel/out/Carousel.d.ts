/// <reference types="react" />
import * as React from 'react';
import { Animated, ViewStyle } from 'react-native';
export interface PageIndicatorConfig {
    pageNum: number;
    childrenNum: number;
    loop: boolean;
    scrollValue: Animated.Value;
}
export interface CarouselProps {
    pageSize: number;
    loop?: boolean;
    index?: number;
    autoplay?: boolean;
    autoplayTimeout?: number;
    slipFactor?: number;
    animation?: (animate: Animated.Value, toValue: number) => Animated.CompositeAnimation;
    onPageChanged?: (index: number) => void;
    showsPageIndicator?: boolean;
    renderPageIndicator?: (config: PageIndicatorConfig) => JSX.Element;
    pageIndicatorContainerStyle?: ViewStyle;
    activePageIndicatorStyle?: ViewStyle;
    pageIndicatorStyle?: ViewStyle;
    pageIndicatorOffset?: number;
}
export interface CarouselState {
    scrollValue: Animated.Value;
}
export default class Carousel extends React.Component<CarouselProps, CarouselState> {
    static defaultProps: CarouselProps;
    private scrollView;
    private autoPlayTimer;
    private pageAnimation;
    private panResponder;
    private currentIndex;
    private panStartIndex;
    private panOffsetFactor;
    constructor(props: any);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: CarouselProps): void;
    private startAutoPlay();
    private stopAutoPlay();
    private computePanOffset(g);
    private startPanResponder();
    private endPanResponder(g);
    private gotoNextPage(animated?);
    private gotoPage(index, animated?, cb?);
    /**
     * -0.5 <= pageIndex <= (pages.length - 1 + 0.5)
     */
    getCurrentPage(): number;
    private loopJump();
    private getChildrenNum();
    private renderIndicator(config);
    render(): JSX.Element;
}
