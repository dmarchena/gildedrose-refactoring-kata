namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public class DefaultQualityUpdater : CommonObjectQualityUpdaterBase
    {
        public DefaultQualityUpdater(Item item) : base(item)
        {
        }

        protected override void CustomUpdate()
        {
            if (Item.Quality > 0)
            {
                Item.Quality -= 1;
            }

            if (Item.SellIn < 0 && Item.Quality > 0)
            {
                Item.Quality -= 1;
            }
        }
    }
}