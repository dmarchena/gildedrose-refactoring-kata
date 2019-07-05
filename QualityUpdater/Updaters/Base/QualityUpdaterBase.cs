namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public abstract class QualityUpdaterBase: IQualityUpdater
    {
        protected readonly Item Item;

        protected QualityUpdaterBase(Item item)
        {
            Item = item;
        }

        protected abstract void CustomUpdate();
        public abstract void Update();

        protected void ClassicalQualityUpdate()
        {
            if (Item.Quality < 50)
            {
                Item.Quality += 1;
            }
        }

    }
}